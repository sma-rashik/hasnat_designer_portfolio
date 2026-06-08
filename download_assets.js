const fs = require('fs');
const path = require('path');

const urls = [
  "https://drive.google.com/file/d/1Kx0IIjrvxJTBQhANhO_r7Qme2PoUoX5V/view?usp=drive_link",
  "https://drive.google.com/file/d/1uVKx5AYUbNAYNO45FcVZqSVOuYNgjOO7/view?usp=drive_link",
  "https://drive.google.com/file/d/1-dvSAIwSb-lkTT-zgDWtzA8_6PUIhT91/view?usp=drive_link",
  "https://drive.google.com/file/d/1Rfmnt_P8dPy7-7xjAJjZKLOd8z-Cqp4Q/view?usp=drive_link",
  "https://drive.google.com/file/d/1rDDGvTYTtTTHGUL2RMoUoODiAMIqwUgL/view?usp=drive_link",
  "https://drive.google.com/file/d/1Iu7sIRHXUORd8M8dJFOwxpfpJYhe_gic/view?usp=drive_link",
  "https://drive.google.com/file/d/1uZ8rnPhT1o0gIRGfrATKWoe4BrSptRnV/view?usp=drive_link",
  "https://drive.google.com/file/d/1Kdk3rpaCPrO2O6p3AemI4z7Dl1iQ6q6_/view?usp=drive_link",
  "https://drive.google.com/file/d/1PQ98B9fd5XkLeJVTnLDX-pE78ZpgpxJI/view?usp=drive_link",
  "https://drive.google.com/file/d/1Q8OIC6OjZ-x0Wq9-c_DUeTumHqKB5Jak/view?usp=drive_link",
  "https://drive.google.com/file/d/1WqYjWT1Jam6TIZEUbFf9kgZFFtZHJd3C/view?usp=drive_link",
  "https://drive.google.com/file/d/1vguBNZ1Ymn6y7KoBKogECziTSJu7iPtz/view?usp=drive_link",
  "https://drive.google.com/file/d/1-1ly06_VcaY5JoOoTdB8iDXR-uXUlrMl/view?usp=drive_link",
  "https://drive.google.com/file/d/1As1-st3-XlTBjoXhWvNaeF-Uv0-MbScO/view?usp=drive_link",
  "https://drive.google.com/file/d/1YKh5WWb6dkMJ3IkU7OZy8OFe07fJMQEU/view?usp=drive_link",
  "https://drive.google.com/file/d/1YQLBYw9b_ona83uY_pBLwfEoefDpK70v/view?usp=drive_link",
  "https://drive.google.com/file/d/1Fn53iiMb1qCKSrEfZUlVt9Y-5v_Rh8bj/view?usp=drive_link",
  "https://drive.google.com/file/d/1KhhsFW3Usa061_hatvHp5rS3ui809pp0/view?usp=drive_link",
  "https://drive.google.com/file/d/1oeqx1PUaL9tStySkRlENt6NHJ4HgYxm0/view?usp=drive_link",
  "https://drive.google.com/file/d/1KkkE6PXOMBEKJumoa_ZKF9dSf1_Fm0B_/view?usp=drive_link",
  "https://drive.google.com/file/d/1FOssdBLFxnusvpyNO0pM0vIBP--msOpx/view?usp=drive_link",
  "https://drive.google.com/file/d/1967H9KFQtvrzqQI6jsY0UbCxO5hrmf0H/view?usp=drive_link",
  "https://drive.google.com/file/d/1osZTCG5igYVrYyEqcvlQdltCqW3a0SWW/view?usp=drive_link",
  "https://drive.google.com/file/d/15nGl5TXcpZMASmpRu07ZoXMscy8Oa-ba/view?usp=drive_link",
  "https://drive.google.com/file/d/18M0QZREEHYduoF68k8gmjcVLIqz5dJnY/view?usp=drive_link",
  "https://drive.google.com/file/d/1JwTLYoo9TNSenNdjtjmg3Bh2BtdZubZj/view?usp=drive_link",
  "https://drive.google.com/file/d/1WcqF_vlrxoGcOHjlxR1Zf0M-O8wYuB7t/view?usp=drive_link",
  "https://drive.google.com/file/d/10EBb1k3eUkAUhBwQH3ELHkEKZqDfoMg3/view?usp=drive_link",
  "https://drive.google.com/file/d/1jbLgqWWVwQ8VKvtGfI8QRR9ccU9uqElV/view?usp=drive_link",
  "https://drive.google.com/file/d/10ei8tFNC9Ll9uE7oa0NOQCB9htT1h7_p/view?usp=drive_link",
  "https://drive.google.com/file/d/1uiEwaMP4ztZmhhGqGTZlB4uFwg-sJLnm/view?usp=drive_link",
  "https://drive.google.com/file/d/1iOxNPCSMcUjS79Mv8nS1j2NbmU48rmnC/view?usp=drive_link",
  "https://drive.google.com/file/d/190mhqysDBSesZpCi5jT0NMy1QIsGE2DY/view?usp=drive_link",
  "https://drive.google.com/file/d/1Yrrfo8fXt2oIyHh_BoCKh6qeju8yAsIZ/view?usp=drive_link",
  "https://drive.google.com/file/d/19z_CKeXtlVGSwQWMMcuvy4cHSSTMkkUD/view?usp=drive_link",
  "https://drive.google.com/file/d/1dQX_hLywrbW3CPIURGXQpXXk58x2v0sU/view?usp=drive_link",
  "https://drive.google.com/file/d/1s-hME-228Wo0ugk_QTJcdeOmBiAzet4b/view?usp=drive_link",
  "https://drive.google.com/file/d/11PYAb3TIfJyUSsIwS7GDFgYtrgiWU8Ty/view?usp=drive_link",
  "https://drive.google.com/file/d/1D2B5YG4bx40A9ZJuDfwd927wgbz2bMxZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1dxi_7sz2S6AhG9kHXoLRW-ZJJUJQAnd0/view?usp=drive_link",
  "https://drive.google.com/file/d/1LWiFTGEnvWI8X8LqU8f91qQVFxCsMZ7t/view?usp=drive_link",
  "https://drive.google.com/file/d/1jaiSsWQVR53B3Qr8HVkRDZ8tmOXa6tme/view?usp=drive_link",
  "https://drive.google.com/file/d/1GgnNLhBDP_3sw590M6WNite4Fm3PakSw/view?usp=drive_link",
  "https://drive.google.com/file/d/1qny0xicm0D3Y1ebdLHcN_qJVIOH2MHX4/view?usp=drive_link",
  "https://drive.google.com/file/d/1tyVpr8Qq6FHHnOabFnm2f21Gjht8U_qZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1STpoLc1P6uaqByjQgBVGqC7k3F0sQVC1/view?usp=drive_link",
  "https://drive.google.com/file/d/1cZIOjR8aVKbSYn6m82cXAKd6wQKFNUEW/view?usp=drive_link",
  "https://drive.google.com/file/d/1twBub0OmOBaeArHV2Pi4dwjk2wgLdeEN/view?usp=drive_link",
  "https://drive.google.com/file/d/1I2mMaWnoOYGCGqQtbRPf2gx8l0xMCmB0/view?usp=drive_link",
  "https://drive.google.com/file/d/1DByNdTViUdEOzvfsfXOZkkXZbzSx5mhy/view?usp=drive_link",
  "https://drive.google.com/file/d/1hFIb0pG6O1_SOepBA_aFgKQO_1gBv9yb/view?usp=drive_link",
  "https://drive.google.com/file/d/1nKkAuonsQMohBfBPB1JZeUjvomfM7yKN/view?usp=drive_link",
  "https://drive.google.com/file/d/1BWQu2FgsDxmr5qNrWvmOlfBXBevD7cCH/view?usp=drive_link",
  "https://drive.google.com/file/d/1Q771vKzehcnzZ7zPppkbOeHRAQItA-KQ/view?usp=drive_link",
  "https://drive.google.com/file/d/1bBwatjqd1ANS-HMaQABmXtdxTcTpLKqp/view?usp=drive_link",
  "https://drive.google.com/file/d/1hhx3t9t-XJKfWypqJk7YnHWTZH3ET8Rd/view?usp=drive_link",
  "https://drive.google.com/file/d/1yUcpO7yDRsHa8dWcdrozE8SyEHN-Aonk/view?usp=drive_link",
  "https://drive.google.com/file/d/1Och1ksb1CObVUnIe2EdbhhXglRNTBiai/view?usp=drive_link",
  "https://drive.google.com/file/d/1gWUb3NJmzccSyZoSTs0CGHu2gGn7S32H/view?usp=drive_link",
  "https://drive.google.com/file/d/1qskXstfOws_yL23okT54ij2cDlxKWfM4/view?usp=drive_link",
  "https://drive.google.com/file/d/1yIBbZe-Qw6d-ALDscxx_LXWk22UQ7C1M/view?usp=drive_link"
];

function parseId(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function downloadFile(id, index) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  let response;
  try {
    response = await fetch(url);
  } catch (err) {
    console.error(`Error fetching ID ${id}:`, err.message);
    return false;
  }
  
  if (!response.ok) {
    console.error(`Failed to fetch ID ${id}: Status ${response.status}`);
    return false;
  }

  const contentType = response.headers.get('content-type') || '';
  let finalResponse = response;

  if (contentType.includes('text/html')) {
    const html = await response.text();
    const match = html.match(/confirm=([a-zA-Z0-9_-]+)/);
    if (match) {
      const confirmToken = match[1];
      const confirmUrl = `https://drive.google.com/uc?export=download&confirm=${confirmToken}&id=${id}`;
      try {
        finalResponse = await fetch(confirmUrl);
      } catch (err) {
        console.error(`Error fetching confirm URL for ID ${id}:`, err.message);
        return false;
      }
    } else {
      console.log(`Failed to find confirmation token for file ID: ${id}. Content preview:`, html.substring(0, 200));
      return false;
    }
  }

  const contentDisposition = finalResponse.headers.get('content-disposition') || '';
  let filename = '';
  const filenameMatch = contentDisposition.match(/filename="(.+?)"/);
  if (filenameMatch) {
    filename = filenameMatch[1];
  } else {
    filename = `file_${id}.jpg`;
  }

  // Safe filename (remove any problematic characters)
  filename = filename.replace(/[\\/:*?"<>|]/g, '_');

  let arrayBuffer;
  try {
    arrayBuffer = await finalResponse.arrayBuffer();
  } catch (err) {
    console.error(`Error reading buffer for ${filename}:`, err.message);
    return false;
  }
  
  const buffer = Buffer.from(arrayBuffer);
  
  const destDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const filePath = path.join(destDir, filename);
  fs.writeFileSync(filePath, buffer);
  console.log(`[${index + 1}/${urls.length}] Downloaded ${filename} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
  return true;
}

async function main() {
  console.log(`Starting download of ${urls.length} files...`);
  let successCount = 0;
  for (let i = 0; i < urls.length; i++) {
    const id = parseId(urls[i]);
    if (!id) {
      console.error(`Could not parse ID from URL: ${urls[i]}`);
      continue;
    }
    const success = await downloadFile(id, i);
    if (success) successCount++;
    await sleep(800); // rate limiting safety
  }
  console.log(`Finished! Downloaded ${successCount}/${urls.length} files successfully.`);
}

main().catch(console.error);
