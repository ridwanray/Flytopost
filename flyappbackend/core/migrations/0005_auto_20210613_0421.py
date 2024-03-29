# Generated by Django 3.1.5 on 2021-06-13 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20210610_2323'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rewards',
            old_name='type',
            new_name='award_type',
        ),
        migrations.RemoveField(
            model_name='package',
            name='package_destination',
        ),
        migrations.AddField(
            model_name='package',
            name='package_destination',
            field=models.ManyToManyField(related_name='package_destination', to='core.Address'),
        ),
        migrations.RemoveField(
            model_name='package',
            name='package_location',
        ),
        migrations.AddField(
            model_name='package',
            name='package_location',
            field=models.ManyToManyField(related_name='package_location', to='core.Address'),
        ),
    ]
