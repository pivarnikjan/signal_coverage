# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-16 20:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogue', '0005_auto_20161216_2014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signalcoverage',
            name='cpe_status',
            field=models.CharField(choices=[(b'Up', b'UP'), (b'Down', b'DOWN')], max_length=4),
        ),
        migrations.AlterField(
            model_name='signalcoverage',
            name='site_status',
            field=models.CharField(choices=[(b'Up', b'UP'), (b'Down', b'DOWN')], max_length=4),
        ),
    ]
