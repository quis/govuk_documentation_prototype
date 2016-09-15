# Getting started

## Installation

```shell
pip install git+https://github.com/alphagov/notifications-python-client.git
```

## Set up

```python
from notifications_python_client.notifications import NotificationsAPIClient

notifications_client = NotificationsAPIClient(
    "https://api.notifications.service.gov.uk",
    service_id=<service_id>,
    api_key=<api_key>
)
```

Generate an API key by logging in to
[GOV.UK Notify](https://www.notifications.service.gov.uk) and going to
the **API integration** page.

You will find your service ID on the **API integration** page.
