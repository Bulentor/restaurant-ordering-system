# Restaurant Ordering System

Групповой проект веб-сервиса доставки еды. Backend на FastAPI, Frontend на React/Vite.

## Быстрый запуск

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Swagger docs: http://localhost:8000/docs
- Database: localhost:5433

Остановить: `docker compose down`

## Технологический стек

**Backend**: Python 3.11, FastAPI, SQLAlchemy, PostgreSQL 16, JWT, Alembic  
**Frontend**: React 19, Vite, React Router  
**DevOps**: Docker, Docker Compose, GitHub Actions (CI/CD)  
**Testing**: Pytest (backend), ESLint (frontend)

## Структура проекта

```
.
├── backend/              # FastAPI сервер
│   ├── routers/          # API endpoints (auth, cart, menu, orders, favorites)
│   ├── migrations/        # Alembic миграции БД
│   ├── tests/             # Unit тесты (pytest)
│   ├── models.py          # SQLAlchemy модели
│   ├── auth.py            # JWT и безопасность
│   ├── Dockerfile         # Build config
│   └── requirements.txt
├── frontend/             # React + Vite
│   ├── pages/             # Компоненты страниц (Home, Menu, Cart, Admin)
│   ├── components/        # Переиспользуемые компоненты
│   ├── Dockerfile         # Build config (multi-stage)
│   ├── nginx.conf         # SPA routing
│   ├── vite.config.js
│   └── package.json
├── docker-compose.yml    # Оркестрация 3 сервисов (db, backend, frontend)
└── .github/workflows/    # GitHub Actions
    ├── test.yml          # Линтинг и тесты на PR
    └── publish.yml       # Линтинг + тесты + деплой на push в main
```

## Разработка

### Локальный запуск

**Backend** (из папки backend):
```bash
python -m uvicorn main:app --reload
```

**Frontend** (из папки frontend):
```bash
npm install
npm run dev
```

### Тестирование и линтинг

```bash
# Backend тесты
cd backend && pytest tests

# Backend lint
ruff check backend

# Frontend lint
npm run lint --prefix frontend

# Frontend build
npm run build --prefix frontend
```

### Database миграции

```bash
docker exec -it restaurant_backend alembic revision --autogenerate -m "описание"
docker exec -it restaurant_backend alembic upgrade head
```

## CI/CD

**test.yml**: На PR в main — прогоняет тесты и lint (backend + frontend)

**publish.yml**: На push/merge в main:
1. Запускает тесты (backend + frontend)
2. Если оба прошли — собирает и пушит образы в Docker Hub

Деплой блокируется при ошибках тестов/линтинга.

## GitHub Secrets

Для автоматического деплоя нужны:
- `DOCKER_USERNAME` — Docker Hub логин
- `DOCKER_PASSWORD` — Docker Hub Access Token
