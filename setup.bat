@echo off
REM Random Bible Verse Generator - Setup Script for Windows

echo 🚀 Setting up Random Bible Verse Generator...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Create environment file if it doesn't exist
if not exist .env.local (
    echo 📝 Creating environment file...
    copy env.example .env.local
    echo ✅ Environment file created (.env.local)
    echo ⚠️  Please update .env.local with your API keys
)

REM Create necessary directories
if not exist public\images mkdir public\images
if not exist public\icons mkdir public\icons

echo 📁 Created necessary directories

REM Run build to check for errors
echo 🔨 Building application...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

echo ✅ Build successful

echo.
echo 🎉 Setup completed successfully!
echo.
echo Next steps:
echo 1. Update .env.local with your API keys (optional for basic functionality)
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000 in your browser
echo.
echo For production deployment:
echo - Run 'npm run build && npm start'
echo - Or use Docker: 'docker-compose up'
echo.
echo 📚 Documentation: README.md
echo 🐛 Issues: Please report on GitHub
echo.
echo Happy coding! 🙏
pause
