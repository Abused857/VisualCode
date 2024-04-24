<h1>Edit Service</h1>
@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->any() as $error)
                <li> {{ $error }} </li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('services.update', $service) }}" method= "POST">
    @csrf
    @method('PUT')
    <label for="name">Name: </label>
    <input type="text" name="name" value="{{ $service->name }}" required>

    <label for="description">Description: </label>
    <input type="text" name="description" value="{{ $service->description }}" required>

    <button type="submit">Update</button>
</form>

<a href="{{ route('services.index') }}"> Cancel</a>