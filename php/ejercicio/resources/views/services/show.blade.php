<h1>Show Service</h1>
<p>Name: {{ $service->name }}</p>

<p>Description: {{ $service->description }} </p>



<a href ="{{ route('services.index') }}">Return to the list</a>