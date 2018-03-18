from django.contrib.postgres.fields import JSONField
from django.db import models


class MapSettings(models.Model):
    name = models.TextField(blank=False, unique=True)
    data = JSONField(blank=True, null=True)
    primary_columns = JSONField(blank=True, null=True)
