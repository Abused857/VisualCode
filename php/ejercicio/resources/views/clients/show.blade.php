<h1>Show Client</h1>
<p>Name: {{ $client->name }}</p>

<p>Email: {{ $client->email }} </p>

<p>Phone: {{ $client->phone ? $client->phone : "empty field" }} </p>

<a href ="{{ route('clients.index') }}">Return to the list</a>