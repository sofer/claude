"""
A simple CLI tool that displays the current date and time.
"""
from datetime import datetime


def get_current_time():
    """
    Get the current date and time.
    
    Returns:
        datetime: Current date and time
    """
    return datetime.now()


def main():
    """
    Main entry point for the CLI tool.
    """
    current_time = get_current_time()
    formatted_time = current_time.strftime("%Y-%m-%d %H:%M:%S")
    print(f"Current date and time: {formatted_time}")


if __name__ == "__main__":
    main()