# ChefhatApp

Initial Architecture/tech-stack:
![image](https://github.com/DominikZig/chefhat-poc/assets/37207882/27e00d0b-e95a-475c-95cd-4da52172391e)


# Project Setup:
1. Install Nodejs v20.11.1 (LTS)
2. Ensure yarn is enabled by running the command: `corepack enable`
3. Navigate to the project root directory and install dependencies by running `yarn install`
4. Install Docker and Docker Desktop on your machine
5. Once Docker is successfully installed, in the root directory run `docker-compose up -d` (the below steps to setup your DB refer to this guide: https://linuxiac.com/postgresql-docker/)
6. Open your browser and go to http://localhost:5050 to open up pgAdmin
7. Enter the username and password specified in the `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` variables in the project's `docker-compose.yaml` file.
![alt text](image.png)
8. Next, click on “Add New Server.”
![alt text](image-1.png)
9. A new modal window will open where you can configure the PostgreSQL server connection settings. First, enter your preferred connection name in the “Name” field.
![alt text](image-2.png)
10. Then select the “Connection” tab. In the “Host name/address” field, enter the name of the Docker’s PostgreSQL container’s service as defined in the `docker-compose.yaml` file. In our case, it is “postgres.” Finally, enter the password given as the value of `POSTGRES_PASSWORD` and save your changes by clicking the “Save” button.
![alt text](image-3.png)
11. Using pgAdmin's SQL query tool, create the `recipe` table by running the `apps/chefhat-backend/chefhat-prisma-client/prisma\migrations/0_init/migration.sql` script
12. Insert some dummy data into the `recipe` table by also using pgAdmin's SQL query tool
13. Create a file called `.env` in the `apps/chefhat-backend/` directory and add a line with your DB path e.g `DATABASE_URL="postgresql://sysadmin:password@localhost:5432/sysadmin?schema=public"`
14. Run the command `yarn prisma generate --schema=chefhat-app/apps/chefhat-backend/chefhat-prisma-client/prisma/schema.prisma`
15. In VSCode, install the "NX Console" extension
16. To start the backend app, use the NX Console or shell to run the command `yarn nx run chefhat-backend:serve`. It should default to http://localhost:3000
17. To start the frontend app, use the NX Console or shell to run the command `yarn nx run chefhat-frontend:dev`. It should default to http://localhost:3001
18. Done!