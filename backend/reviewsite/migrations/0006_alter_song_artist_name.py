# Generated by Django 4.0.3 on 2022-04-13 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviewsite', '0005_remove_artist_artist_genre_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='artist_name',
            field=models.CharField(max_length=100),
        ),
    ]