"""
Tests for your CLI application.

This is a template file for testing your CLI application. Replace this with your
actual tests.
"""
import pytest
from click.testing import CliRunner


def test_cli_runs():
    """Test that the CLI application runs without errors."""
    # Import your main function here
    from src.cli import main
    
    runner = CliRunner()
    result = runner.invoke(main)
    assert result.exit_code == 0
    assert "Hello! This is your new CLI tool." in result.output