HUGO        := hugo
EXAMPLE_DIR := exampleSite
THEMES_DIR  := ../..
PUBLIC_DIR  := $(EXAMPLE_DIR)/public

.PHONY: help serve build clean

help:
	@echo "Available targets:"
	@echo "  serve   Start the Hugo development server with live reload"
	@echo "  build   Build the example site into $(PUBLIC_DIR)"
	@echo "  clean   Remove generated files ($(PUBLIC_DIR) and resources/)"

serve:
	$(HUGO) server -s $(EXAMPLE_DIR) --themesDir $(THEMES_DIR)

build:
	$(HUGO) -s $(EXAMPLE_DIR) --themesDir $(THEMES_DIR)

clean:
	rm -rf $(PUBLIC_DIR) resources/
