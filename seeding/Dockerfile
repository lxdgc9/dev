FROM mongo
WORKDIR /usr/seeding/
COPY . /usr/seeding/
RUN chmod +x /usr/seeding/import.sh
CMD /usr/seeding/import.sh

