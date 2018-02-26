from django.db import models

from django.contrib.postgres.fields import JSONField
from django.db import models


class MLData(models.Model):
    customer_id = models.IntegerField(default=0, unique=True)
    data = JSONField()
