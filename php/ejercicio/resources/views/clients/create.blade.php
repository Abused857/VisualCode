<h1>Create Client</h1>
@if ($errors->any())
    <div>
    
        <ul>
            @foreach ($errors-> all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>    
@endif

<form action ="{{ route('clients.store') }}" method="POST">
    @csrf
    <label for="name">Name: </label>
    <input type="text" name="name" required>

    <label for="email" >Email: </label>
    <input type="email" name="email" required>

    <label for ="phone">Phone: </label>
    <input type="phone" name="phone" required>

    <button type="submit">Save</button>
</form>
<a href="{{ route('clients.index') }}"> Cancel</a>