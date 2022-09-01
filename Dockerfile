FROM ruby:2.7
MAINTAINER Bart Oleszczyk <bart@primate.co.uk>

# Update system
RUN apt-get -y update -qq
# Install required libraries
RUN apt-get install -y \
            build-essential \
            git \
            curl \
            vim \
            rsync \
            libpq-dev \
            python-dev \
            python2.7-dev \
            imagemagick \
            libmagickcore-dev \
            libmagickwand-dev \
            postgresql-client \
            apt-transport-https \
            ruby-chunky-png \
            npm \
            libv8-dev \
            libvips \
            libvips-dev \
            libvips-tools
RUN mkdir /kubik_metatagable
RUN mkdir -p /vendor/bundle

RUN gem install bundler

ENV APP_PATH /kubik_interface_elements/test/dummy
WORKDIR /tmp
ADD Gemfile /tmp/Gemfile
ADD Gemfile.lock /tmp/Gemfile.lock
ADD kubik_interface_elements.gemspec /tmp/kubik_interface_elements.gemspec
RUN bundle install
RUN mkdir /kubik_interface_elements
WORKDIR /kubik_interface_elements

# YARN
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn
RUN yarn global add node-gyp
RUN yarn install
