# CI setup in Python

## Tools used
Python, being a very popular language, has a wide variety of tools available to be used in CI. 

Linters include `pylint`, `mypy`, and `flake8`. They all follow the PEP 8 style guide. 

Unit tests can be written with `unittest`.  It's a standard Python module used to write unit tests, as the name suggests. Other options include `doctest`, which verifies that tested functions work exactly as described in the doctext. There's also `mock`, a part of `unittest` since Python 3.3, which can be used to mock objects and make assertions.

Python is an interpreted language, so there's no specific build step. In CI, this means that all that is required is to install dependencies to ensure running the program is possible.

## Alternatives to Jenkins and GitHub Actions
Some popular alternatives to Jenkins and GitHub Actions include Circle CI, Spacelift and GitLab. 

Circle CI offers both cloud-based and self-hosted options, so the choice depends on the type of project. Spacelift is seemingly only cloud-based, so it's better for  smaller projects that don't require as much resources. GitLab also provides both, and as such is a very versatile tool. 

For the purposes of this course, a cloud-based solution probably works best.
