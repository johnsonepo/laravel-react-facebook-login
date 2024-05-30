<button {{ $attributes->merge(['class'=>"pt $type"]) }}>
    {{ $slot }}
</button>
