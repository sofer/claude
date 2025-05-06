# Claude Project Template

This repository serves as a template for starting new projects with Claude Code assistance.

## Repository Structure

- **[CLAUDE.md](./CLAUDE.md)**: Configuration instructions for Claude
- **[CURRICULUM.md](./CURRICULUM.md)**: Learning modules and objectives
- **[PEDAGOGY.md](./PEDAGOGY.md)**: Teaching methodology and assessment approach
- **[LANGUAGE.md](./LANGUAGE.md)**: Programming specifications and coding standards
- **[PROJECT.md](./PROJECT.md)**: Specific details about your project
- **[TEMPLATE.md](./TEMPLATE.md)**: Instructions for setting up the template

## How to Use This Repository

To use this template:

1. Clone or fork this repository
2. Follow the setup instructions in [TEMPLATE.md](./TEMPLATE.md)
3. Customize the configuration files for your specific project
4. Start building with Claude Code assistance

## Getting Started

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -e ".[dev]"

# Run the CLI tool
python -m src.cli

# Run tests
pytest
```