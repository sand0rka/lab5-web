# Generated by Django 4.2.2 on 2023-10-19 20:58

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("trolleybuses", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="trolleybus",
            name="trolleybus_number",
            field=models.PositiveIntegerField(unique=True),
        ),
    ]
