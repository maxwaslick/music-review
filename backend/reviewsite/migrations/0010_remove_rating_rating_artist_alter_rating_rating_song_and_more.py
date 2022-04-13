# Generated by Django 4.0.3 on 2022-04-13 19:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reviewsite', '0009_alter_rating_rating_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rating',
            name='Rating_artist',
        ),
        migrations.AlterField(
            model_name='rating',
            name='Rating_song',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reviewsite.song'),
        ),
        migrations.AlterField(
            model_name='rating',
            name='Rating_username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reviewsite.user'),
        ),
    ]