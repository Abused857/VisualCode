import re
from django.shortcuts import render
from django.shortcuts import redirect
from django.utils.timezone import datetime
from django.http import HttpResponse
from django.shortcuts import render
from hello.forms import LogMessageForm
from hello.models import LogMessage
from django.views.generic import ListView

class HomeListView(ListView):
    """Renders the home page, with a list of all messages."""
    model = LogMessage

    def get_context_data(self, **kwargs):
        context = super(HomeListView, self).get_context_data(**kwargs)
        return context

def contact(request):
    return render(request, "hello/contact.html")
def about(request):
    return render (request, "hello/about.html")

def hello_there(request, name):
    # Obtén la fecha del parámetro de consulta
    date_param = request.GET.get('date', None)

    if date_param:
        try:
            # Intenta convertir la fecha proporcionada en un objeto datetime
            date = datetime.strptime(date_param, "%Y-%m-%d")
        except ValueError:
            return HttpResponse("Formato de fecha inválido. Use AAAA-MM-DD.", status=400)
    else:
        
        date = datetime.now()

    return render(
        request,
        'hello/hello_there.html',
        {
            'name': name,
            'date': date,
        }
    )
    
def log_message(request):
    form = LogMessageForm(request.POST or None)
    
    if request.method == "POST":
        if form.is_valid():
            message = form.save(commit=False)
            message.log_date = datetime.now()
            message.save()
            return redirect("home")
    else:
        return render(request, "hello/log_message.html", {"form": form})



