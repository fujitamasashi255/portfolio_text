# -*- encoding: utf-8 -*-
# stub: rails-latex 2.3.4 ruby lib

Gem::Specification.new do |s|
  s.name = "rails-latex".freeze
  s.version = "2.3.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jan Baier".freeze, "Geoff Jacobsen".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-12-31"
  s.description = "rails-latex is a renderer for rails which allows tex files with erb to be turned into an inline pdf.".freeze
  s.email = ["jan.baier@amagical.net".freeze]
  s.homepage = "https://github.com/amagical-net/rails-latex".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.3".freeze
  s.summary = "A LaTeX to PDF rails renderer.".freeze

  s.installed_by_version = "3.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<rails>.freeze, [">= 3.0.0", "< 8"])
    s.add_development_dependency(%q<RedCloth>.freeze, ["~> 4.3"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 13"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_development_dependency(%q<minitest-reporters>.freeze, ["~> 1.3"])
  else
    s.add_dependency(%q<rails>.freeze, [">= 3.0.0", "< 8"])
    s.add_dependency(%q<RedCloth>.freeze, ["~> 4.3"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 13"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_dependency(%q<minitest-reporters>.freeze, ["~> 1.3"])
  end
end
