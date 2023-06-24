// This tag spelling requires the reader to know how std::optional
// interacts with std::in_place.
std::optional<Foo> with_tag(std::in_place, 5, 10);

// Here the intent is clearer: make an optional Foo by providing these
// argments.
std::optional<Foo> with_factory = std::make_optional<Foo>(5, 10);