from .models import Goal
from rest_framework.decorators import api_view
from .serializers import GoalSerializer
from rest_framework.response import Response
from rest_framework import status
@api_view(["GET", "POST"])
def goals(request):
    if request.method == "GET":
        goals = Goal.objects.all()
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = GoalSerializer(data=request.data)
        if serializer.is_valid():
            saved_goal = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(["POST"])
def add_task_to_goal(request, goal_id):
    try:
        goal = Goal.objects.get(id=goal_id)
    except Goal.DoesNotExist:
        return Response({"error":"goal not found"}, status.HTTP_400_BAD_REQUEST)



