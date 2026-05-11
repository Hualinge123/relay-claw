#!/bin/bash
# Local CI check script - run GitHub Actions checks locally

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Local CI Check Runner${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo -e "${RED}uv is not installed!${NC}"
    echo "Install it with: curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
uv sync --extra dev --all-groups

# Run tests
echo ""
echo -e "${YELLOW}Running tests...${NC}"
uv run pytest tests/ -v --cov=jiuwenclaw --cov-report=term-missing

# Run linting
echo ""
echo -e "${YELLOW}Running ruff linting...${NC}"
uv run ruff check jiuwenclaw/ --output-format=concise

# Run format check
echo ""
echo -e "${YELLOW}Running black format check...${NC}"
uv run black --check --diff jiuwenclaw/

# Run type check (non-blocking)
echo ""
echo -e "${YELLOW}Running mypy type check...${NC}"
uv run mypy jiuwenclaw/ --ignore-missing-imports || echo -e "${YELLOW}mypy check completed with warnings${NC}"

# Run security scan (non-blocking)
echo ""
echo -e "${YELLOW}Running bandit security scan...${NC}"
uv run bandit -r jiuwenclaw/ -ll --skip B101,B311 || echo -e "${YELLOW}bandit scan completed with warnings${NC}"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  All local CI checks completed! ✓${NC}"
echo -e "${GREEN}========================================${NC}"