# Generated by Django 4.0.3 on 2022-04-13 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviewsite', '0007_rating_rating_artist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='Rating_song',
            field=models.CharField(max_length=100),
        ),
    ]