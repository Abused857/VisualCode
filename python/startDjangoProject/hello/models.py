from django.db import models
from django.utils import timezone
class LogMessage(models.Model):
    message = models.CharField(max_length=300)
    log_date = models.DateTimeField("date logged")
    
    def __str___(self):
        """Returns a string representation of a message."""
        date = timezone.localtime(self.logdate)
        return f"'{self.message}' logged on {date.strftime('%A, %d, %B, %Y at %X')}"