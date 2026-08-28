CREATE TABLE `contacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`projectType` varchar(100) NOT NULL,
	`message` text NOT NULL,
	`status` varchar(50) NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
