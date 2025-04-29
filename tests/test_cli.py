"""
Simple test for the CLI tool that displays the current date and time.
"""
from datetime import datetime


def test_get_current_time():
    """Test that get_current_time returns a datetime object."""
    # Import here to avoid import errors when running tests before implementation
    from src.cli import get_current_time
    
    result = get_current_time()
    assert isinstance(result, datetime)