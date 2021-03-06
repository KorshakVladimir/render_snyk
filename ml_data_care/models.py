
from django.contrib.postgres.fields import JSONField
from django.db import models

from company_management.models import Company


class MLData(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.TextField(blank=False)
    key_data = models.TextField(blank=True)
    data = JSONField(blank=True, null=True)

    class Meta:
        unique_together = ("company", "name")
