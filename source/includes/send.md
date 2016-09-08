# Sending a message

## Text message
```python
notifications_client.send_sms_notification(
    mobile_number,
    template_id,
    personalisation={
        'name': 'Amala',
        'reference_number': '300241',
    }
)
```

## Email
```python
notifications_client.send_email_notification(
    email_address,
    template_id,
    personalisation={
        'name': 'Amala',
        'reference_number': '300241',
    }
)
```

Find `template_id` by clicking **API info** for the template you want to send.

If a template has placeholders, you need to provide their values in `personalisation`.

<details>
    <summary>
        Response:
    </summary>

<table>
  <thead>
    <tr>
        <td>Status
        </td>
        <td>Body
        </td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>201
        </td>
        <td>
<pre>
{
  "data":{
    "notification": {
      "id":1
    },
    "body": "Dear Bill, your licence is due for renewal on 3 January 2016.",
    "template_version": 1,
    "subject": "Licence renewal"
  }
}
</pre>
        </td>
    </tr>
    <tr>
        <td>429
        </td>
        <td>
<pre>
{"result": "error",
"message": "Exceeded send limits (50) for today"}
</pre>
        </td>
    </tr>
        <tr>
        <td>400
        </td>
        <td>
<pre>
{"result":"error",
"message": "Can’t send to this recipient using a team-only API key"]}
</pre>
        </td>
    </tr>
        </tr>
        <tr>
        <td>400
        </td>
        <td>
<pre>
{"result":"error",
"message"="Can’t send to this recipient when service is in trial
mode - see https://www.notifications.service.gov.uk/trial-mode"]}
</pre>
        </td>
    </tr>
  </tbody>
</table>

</details>
