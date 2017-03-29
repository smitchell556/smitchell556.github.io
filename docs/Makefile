# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = Resume
SOURCEDIR     = .
BUILDDIR      = _build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: build clean_portfolio pdf help Makefile

portfolio: clean clean_portfolio html pdf
	cp -r $(BUILDDIR)/html/. ../

clean_portfolio:
	rm -rf ../*.html ../*.js ../*.inv ../_static ../_sources

pdf:
	awk '!/:tocdepth: 2/' index.rst > tmp.rst && rst2pdf tmp.rst ../resume.pdf && rm tmp.rst

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
