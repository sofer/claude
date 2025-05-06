# Template Setup Instructions

This file provides instructions for setting up your project using this template.

## Getting Started

1. **Update Project Information**:
   - Edit `PROJECT.md` with details about your specific project
   - Update `README.md` if needed for your project specifics

2. **Configure Python Package**:
   - In `pyproject.toml`, replace:
     - `name = "your-package-name"` with your actual package name
     - `description = "Your project description"` with your project description
     - `your-cli-name = "src.cli:main"` with your CLI command name

3. **Implement Your CLI Tool**:
   - Update `src/cli.py` with your actual CLI implementation
   - Update `tests/test_cli.py` with tests for your CLI tool

4. **Configure Claude**:
   - Review and update `CLAUDE.md` with any project-specific instructions for Claude
   - Remove or modify sections that don't apply to your project

5. **Set Up Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -e ".[dev]"
   ```

6. **Run Tests**:
   ```bash
   pytest
   ```

7. **Remove Template Files**:
   - Once setup is complete, you can remove this file (`TEMPLATE.md`)

## Template Structure

- `README.md`: Main repository documentation
- `PROJECT.md`: Project-specific details
- `CLAUDE.md`: Configuration for Claude Code
- `CURRICULUM.md`: Learning modules (if applicable)
- `PEDAGOGY.md`: Teaching methodology (if applicable)
- `LANGUAGE.md`: Programming specifications
- `src/`: Source code directory
- `tests/`: Test files directory

## Additional Resources

- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Click Documentation](https://click.palletsprojects.com/) for CLI development