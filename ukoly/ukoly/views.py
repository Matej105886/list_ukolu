from .models import Goal
from rest_framework.decorators import api_view
from .serializers import GoalSerializer
from rest_framework.response import Response
@api_view(["GET", "POST"])
def goals(request):
    if request.method == "GET":
        goals = Goal.objects.all()
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data)