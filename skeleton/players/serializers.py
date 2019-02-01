from rest_framework import serializers
from players.models import Player 

# Player Serializer 

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player 
        fields = '__all__'