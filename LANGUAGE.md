# Language and Technology Specifications

> **Purpose**: This file defines the programming languages, tools, and technologies used in this repository.

## Primary Language: Python

This repository uses Python as its primary programming language. All examples, exercises, and projects should be implemented in Python 3.8 or higher.

### Python Coding Standards

- Follow [PEP 8](https://peps.python.org/pep-0008/) style guidelines
- Use type hints according to [PEP 484](https://peps.python.org/pep-0484/)
- Write docstrings in [Google style](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html)
- Format imports in the following order:
  1. Standard library
  2. Third-party libraries
  3. Local modules

### Project Structure

- `src/`: Source code in Python package format
- `tests/`: Pytest test files
- `docs/`: Documentation files

## Development Environment

### Required Tools

- Python 3.8+
- Virtual environment (venv or conda)
- Git for version control

### Useful Commands

- `python -m venv venv`: Create virtual environment
- `source venv/bin/activate` (Unix) or `venv\Scripts\activate` (Windows): Activate virtual environment
- `pip install -e '.[dev]'`: Install project in development mode

### Testing and Quality Tools

- `pytest`: Run test suite
- `pytest tests/test_specific.py`: Run specific test file
- `flake8`: Run linting checks
- `mypy`: Check type hints
- `python -m src.cli`: Run the CLI tool

## Third-Party Libraries

### Core Dependencies

- Click: For command-line interfaces
- Requests: For HTTP operations (if needed)
- Pytest: For testing

### Optional Dependencies

- Pandas: For data manipulation
- NumPy: For numerical operations
- Matplotlib: For visualizations

## Version Control Practices

- Use feature branches for development
- Write descriptive commit messages
- Include tests for new features
- Update documentation alongside code changes