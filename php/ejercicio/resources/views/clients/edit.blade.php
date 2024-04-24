<h1>Edit Client</h1>
@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->any() as $error)
                <li> {{ $error }} </li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('clients.update', $client) }}" method= "POST">
    @csrf
    @method('PUT')
    <label for="name">Name: </label>
    <input type="text" name="name" value="{{ $client->name }}" required>

    <label for="email">Email </label>
    <input type="email" name="email" required value="{{ $client->email }}">

    <label for="phone"> Phone: </label>
    <input type="phone" name="phone" value="{{$client->phone ? $client->phone : 'Fill this field' }}">
    <button type="submit">Update</button>
</form>

<a href="{{ route('clients.index') }}"> Cancel</a>