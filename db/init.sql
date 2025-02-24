

-- Crear tabla de videos (si no existe)
CREATE TABLE IF NOT EXISTS "Videos" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(100) NOT NULL,
    url TEXT NOT NULL
);

-- Crear tabla de banners (si no existe)
CREATE TABLE IF NOT EXISTS "Banners" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(100) NOT NULL,
    imageUrl TEXT NOT NULL
);

-- Crear tabla de programación (si no existe)
CREATE TABLE IF NOT EXISTS "Schedule" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contentId UUID NOT NULL,
    type VARCHAR(10) NOT NULL CHECK (type IN ('video', 'banner')),
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP NOT NULL
);


-- Insertar banners
INSERT INTO "Banners" (id, title, imageUrl) VALUES 
('00000000-0000-0000-0000-000000000011', 'Banner 1', 'https://placecats.com/millie_neo/300/200'),
('00000000-0000-0000-0000-000000000012', 'Banner 2', 'https://placecats.com/neo_banana/300/200'),
('00000000-0000-0000-0000-000000000013', 'Banner 3', 'https://placecats.com/neo_2/300/200')
ON CONFLICT DO NOTHING;

-- Insertar videos
INSERT INTO "Videos" (id, title, url) VALUES 
('00000000-0000-0000-0000-000000000021', 'Video 1', 'https://www.youtube.com/watch?v=SLD9xzJ4oeU&t=29s&pp=ygUEaHVsaw%3D%3D'),
('00000000-0000-0000-0000-000000000022', 'Video 2', 'https://www.youtube.com/watch?v=IKWlIM11PVw&pp=ygUSc3BpZGVyIG1hbiBlc2NlbmFz'),
('00000000-0000-0000-0000-000000000023', 'Video 3', 'https://www.youtube.com/watch?v=3r6sJ3gHN1w&pp=ygUSc3BpZGVyIG1hbiBlc2NlbmFz')
ON CONFLICT DO NOTHING;
