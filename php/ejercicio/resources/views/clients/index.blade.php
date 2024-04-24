<h1>List of Clients</h1>
@if(session('success'))
    <div style="color: green;">
    {{ session('success') }}
    </div>
@endif
    <a href="{{ route('clients.create') }}">Create new client</a>
    <ul>
@foreach ($clients as $client)
    <li>{{ $client->name }} - {{ $client->email }}
    <a href="{{ route('clients.show', $client) }}">Show</a>
    <a href="{{ route('clients.edit', $client) }}">Edit</a>
    <form action="{{ route('clients.destroy', $client) }}" method="POST">
@csrf
@method('DELETE')
    <button type="submit">Delete</button>
    </form>
    </li>
@endforeach
    </ul>