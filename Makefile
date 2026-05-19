.PHONY: test-frontend test-backend test-all docker-up docker-down docker-logs help

# Настройки по умолчанию
help:
	@echo "Доступные команды:"
	@echo "  make test-frontend  - Запустить линтер и билд фронтенда"
	@echo "  make test-backend   - Запустить ruff и pytest для бэкенда"
	@echo "  make test-all       - Запустить все проверки (фронт + бэк)"
	@echo "  make docker-up      - Собрать и запустить проект в Docker (в фоне)"
	@echo "  make docker-down    - Остановить и удалить контейнеры Docker"
	@echo "  make docker-logs    - Посмотреть логи запущенных контейнеров"

# --- Тесты ---
test-frontend:
	@echo "=> Запуск тестов фронтенда..."
	cd frontend && npm ci && npm run lint -- --fix && npm run build

test-backend:
	@echo "=> Запуск тестов бэкенда..."
	ruff check backend --fix
	export PYTHONPATH=$$PYTHONPATH:$$(pwd) && pytest backend/tests

test-all: test-frontend test-backend
	@echo "=> Все проверки успешно пройдены!"

# --- Docker ---
docker-up:
	@echo "=> Запуск проекта в Docker..."
	docker compose up -d --build

docker-down:
	@echo "=> Остановка Docker..."
	docker compose down

docker-logs:
	docker compose logs -f
