import os

def Settings(**kwargs):
    filename = kwargs['filename']

    # HTML
    if filename.endswith('.html'):
        return {
            'flags': [
                '-x', 'html',
            ],
        }

    # CSS
    elif filename.endswith('.css'):
        return {
            'flags': [
                '-x', 'css',
            ],
        }

    # JavaScript
    elif filename.endswith('.js') or filename.endswith('.jsx'):
        return {
            'flags': [
                '-x', 'javascript',
                '-std=es6',  # Используйте соответствующий стандарт ECMAScript
            ],
        }

    # Express (Node.js)
    elif filename.endswith('.js'):  # Поскольку Express написан на JavaScript
        return {
            'flags': [
                '-x', 'javascript',
            ],
        }

    # React (JSX)
    elif filename.endswith('.jsx'):
        return {
            'flags': [
                '-x', 'javascript',
            ],
        }

    # Для других языков
    return {}
