from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from app.core.config import settings

# Asynchronous engine using asyncpg for PostgreSQL.
# In SQLAlchemy, engines initialize connection pools lazily;
# no connection attempts occur until an explicit transaction or query is executed.
async_engine = create_async_engine(
    settings.SQLALCHEMY_DATABASE_URI,
    echo=False,
    future=True,
)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency yielding an asynchronous database session.

    Yields:
        AsyncSession: Active async database session.
    """
    async with AsyncSessionLocal() as session:
        yield session
