# ⚙️ Book Shop — Backend Services

> Business microservices for the **Book Shop Microservices Architecture**.

---

## 👨‍🎓 Student Information

| Field              | Details             |
| :----------------- | :------------------ |
| **Student Name**   | **Ashen Indeewara** |
| **Student Number** | **241722049**       |
| **GCP Project ID** | **bookstore-ashen** |

---

## 📖 Project Overview

The **Bookstore Backend Services** repository contains the business-oriented microservices that power the Book Shop application.

The system separates major business responsibilities into independent services:

* 👤 User Service
* 📚 Book Service
* 📦 Order Service

Each service is maintained independently and included in this repository using **Git submodules**. The repository's `.gitmodules` configuration confirms the three service repositories.

---

## 🧩 Microservices

### 👤 User Service

Responsible for user-related functionality such as:

* User management
* User registration
* User information

Repository:

`https://github.com/AshenIndeewara/bookstore-user-service`

### 📚 Book Service

Responsible for the bookstore catalog and book-related functionality.

Repository:

`https://github.com/AshenIndeewara/bookstore-book-service`

### 📦 Order Service

Responsible for order-related business functionality.

Repository:

`https://github.com/AshenIndeewara/bookstore-order-service`

The three services are configured as Git submodules in this repository.

---

## 🏗️ Architecture

```text
                    ┌──────────────────────────┐
                    │    Book Shop Frontend    │
                    │       React + Vite       │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       API Gateway        │
                    └────────────┬─────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
        ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
        │ User Service │ │ Book Service  │ │ Order Service│
        │              │ │               │ │              │
        └──────────────┘ └──────────────┘ └──────────────┘
                │                │                │
                └────────────────┼────────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │      Service Discovery   │
                    │       Eureka Server      │
                    └──────────────────────────┘
```

---

## 📂 Repository Structure

```text
bookstore-backend-services/
│
├── .github/
│   └── workflows/
│
├── user-service/
│
├── book-service/
│
├── order-service/
│
├── deploy/
│   └── startup-scripts/
│
├── .gitmodules
└── README.md
```

The repository currently contains the three service submodules and deployment/startup scripts.

---

## 🔗 Git Submodules

The services are maintained as separate repositories:

| Service          | Repository                |
| :--------------- | :------------------------ |
| 👤 User Service  | `bookstore-user-service`  |
| 📚 Book Service  | `bookstore-book-service`  |
| 📦 Order Service | `bookstore-order-service` |

The `.gitmodules` file defines the exact repository URLs for all three services.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Java Development Kit (JDK)
* Maven
* Git
* Git Submodules
* Running Book Shop platform components

### Clone with Submodules

The recommended way to clone this repository is:

```bash
git clone --recurse-submodules https://github.com/AshenIndeewara/bookstore-backend-services.git
cd bookstore-backend-services
```

If you already cloned the repository without submodules:

```bash
git submodule update --init --recursive
```

---

## ▶️ Starting the Services

Each service is an independent application.

```text
User Service
     │
     ├── Registers with Eureka
     │
     └── Provides user-related APIs

Book Service
     │
     ├── Registers with Eureka
     │
     └── Provides book-related APIs

Order Service
     │
     ├── Registers with Eureka
     │
     └── Provides order-related APIs
```

The services should be started after the platform infrastructure is available:

```text
1. Config Server
2. Eureka Server
3. API Gateway
4. User Service
5. Book Service
6. Order Service
```

---

## 🔄 Backend Request Flow

```text
Client
  │
  ▼
API Gateway
  │
  ▼
Service Discovery
  │
  ├──────────────► User Service
  │
  ├──────────────► Book Service
  │
  └──────────────► Order Service
```

This structure allows each business service to operate independently while the API Gateway provides a centralized entry point.

---

## 🔄 Updating Submodules

To update all services to their latest referenced commits:

```bash
git submodule update --remote --merge
```

To check the current submodule status:

```bash
git submodule status
```

---

## 🔐 Security

* Never commit passwords or API credentials.
* Keep sensitive configuration outside source control.
* Use environment-specific configuration for deployments.
* Protect database credentials and cloud credentials.
* Do not expose private service configuration publicly.

---

## 🔗 Related Repositories

### Frontend

https://github.com/AshenIndeewara/bookstore-frontend

### Backend Platform

https://github.com/AshenIndeewara/bookstore-backend-platform

### Backend Services

https://github.com/AshenIndeewara/bookstore-backend-services

### Individual Services

* `bookstore-user-service`
* `bookstore-book-service`
* `bookstore-order-service`

---

## 📌 Repository Role

This repository contains the **Business Microservices Layer** of the Book Shop system.

It separates the application's core business functionality into independently maintained services for:

* User management
* Book management
* Order management

---

## 👨‍💻 Author

**Ashen Indeewara**

**Student Number:** 241722049

**GCP Project:** `bookstore-ashen`
