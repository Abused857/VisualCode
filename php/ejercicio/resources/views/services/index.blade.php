<h1>List of Services</h1>
@if (session('success'))
<div style="color: green;">
    {{ session('success') }}
</div>
@endif

    <a href="{{ route('services.create') }}"> Create new Service</a>
    <ul>
        @foreach ($services as $service)
        <li>
            {{ $service->name }} - {{ $service->description }}
            <a href="{{ route('services.show', $service) }}">Show</a>
            <a href="{{ route('services.edit', $service) }}">Edit</a>
             <form action="{{ route('services.destroy', $service) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
             </form>
        </li>
            
        @endforeach
    </ul>