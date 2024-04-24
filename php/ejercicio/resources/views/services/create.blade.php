<h1>Create Service</h1>
@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->all() as $error )
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif


<form action ="{{ route('services.store') }}" method="POST">
    @csrf
    <label for="name">Name:</label>
    <input type="text" name="name" required>

    <label for="description">Description:</label>
    <input type="text" name="description" required>

    <button type="submit">Save</button>
</form>
<a href="{{ route('services.index') }}">Cancel</a>