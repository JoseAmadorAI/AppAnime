# 🎌 AppAnime - Aplicación de Gestión de Animes

Una aplicación web moderna para gestionar y descubrir animes, construida con React, Node.js y PostgreSQL.

## 🚀 Características

- ✅ Autenticación de usuarios con JWT
- ✅ Gestión de favoritos de anime
- ✅ Recuperación de contraseña por email
- ✅ Interfaz moderna y responsiva
- ✅ API RESTful completa

## 🛠️ Tecnologías

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js + Express
- PostgreSQL
- JWT para autenticación
- Nodemailer (Brevo SMTP)
- bcrypt para hash de contraseñas

## 📋 Requisitos Previos

- Node.js 18+
- PostgreSQL 12+
- Cuenta en Brevo (para SMTP)

## 🔧 Instalación

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd AppAnime
```

### 2. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar .env con tus credenciales reales
nano .env
```

### 3. Instalar dependencias
```bash
# Backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Configurar base de datos
```bash
# Crear base de datos PostgreSQL
createdb appanime

# Ejecutar script de configuración
psql -d appanime -f database_setup.sql
```

### 5. Ejecutar la aplicación
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🔐 Configuración de Seguridad

### Variables de Entorno Requeridas

```env
# Base de datos
DATABASE_URL=postgresql://usuario:password@localhost:5432/appanime

# JWT
JWT_SECRET=tu-jwt-secret-super-seguro

# SMTP (Brevo)
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=tu-email@brevo.com
SMTP_PASS=tu-clave-smtp-brevo

# URLs
FRONTEND_URL=http://localhost:5174
BACKEND_URL=http://localhost:3000
```

### ⚠️ Importante
- **NUNCA** subas el archivo `.env` al repositorio
- Usa claves JWT seguras y únicas
- Configura correctamente las credenciales de Brevo
- Mantén actualizadas las dependencias

## 📧 Configuración de Email

1. Crear cuenta en [Brevo](https://www.brevo.com/)
2. Generar clave SMTP en la configuración
3. Configurar variables `SMTP_*` en `.env`
4. Verificar dominio para mejor deliverability

## 🚀 Despliegue

### Producción
```bash
# Configurar variables de producción
NODE_ENV=production
FRONTEND_URL=https://tuapp.com
BACKEND_URL=https://api.tuapp.com

# Build del frontend
cd frontend
npm run build

# Iniciar backend
npm start
```

## 📚 Documentación

- [API Documentation](./docs/api.md)
- [Database Schema](./docs/database.md)
- [Security Guidelines](./docs/security.md)

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🆘 Soporte

Si encuentras algún problema:
1. Revisa la [documentación](./docs/)
2. Busca en [issues](../../issues)
3. Crea un nuevo issue con detalles del problema

---

**Desarrollado con ❤️ por José Amador** 