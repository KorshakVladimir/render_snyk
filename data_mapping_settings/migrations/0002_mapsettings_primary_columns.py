# Generated by Django 2.0.2 on 2018-03-18 06:07

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data_mapping_settings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapsettings',
            name='primary_columns',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True),
        ),
    ]
