
from django.contrib.postgres.fields import JSONField, ArrayField
from django.db import models

from company_management.models import Company


class MLData(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.TextField(blank=False)
    data = JSONField(blank=True, null=True)

    class Meta:
        unique_together = ("company", "name")
