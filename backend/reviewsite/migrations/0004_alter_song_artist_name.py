# Generated by Django 4.0.3 on 2022-04-13 17:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reviewsite', '0003_alter_song_artist_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='artist_name',
            field=models.ForeignKey(max_length=100, on_delete=django.db.models.deletion.CASCADE, to='reviewsite.artist'),
        ),
    ]